import { GetServerSideProps } from "next";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { Textarea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import {
  collection,
  addDoc,
  query,
  orderBy,
  where,
  onSnapshot,
  doc,
  deleteDoc
} from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

interface HomeProps {
  user: {
    email: string;
  };
}

interface TasksProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

export default function Dashboard({ user }: HomeProps) {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);
  const [tasks, setTaks] = useState<TasksProps[]>([]);

  function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
    setPublicTask(event.target.checked);
  }

  useEffect(() => {
    async function loadTasks() {
      const tarefasRef = collection(db, "tasks");

      const q = query(
        tarefasRef,
        orderBy("created", "desc"),
        where("user", "==", user?.email)
      );

      onSnapshot(q, (snapshot) => {
        let list = [] as TasksProps[];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            tarefa: doc.data().tarefa,
            created: doc.data().data,
            user: doc.data().user,
            public: doc.data().public,
          });
        });

        setTaks(list);
      });
    }

    loadTasks();
  }, [user?.email]);

  async function handleRegisterTask(event: FormEvent) {
    event.preventDefault();

    if (input === "") return;

    try {
      await addDoc(collection(db, "tasks"), {
        tarefa: input,
        created: new Date(),
        user: user?.email,
        public: publicTask,
      });

      setInput("");
      setPublicTask(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleShare(taskId: string){
    await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_URL}/task/${taskId}`)
        alert("URL copiada com sucesso!")
  }

  async function handleDeleteTask(taskId: string){
    const docRef = doc(db, "tasks", taskId)

    await deleteDoc(docRef)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>

            <form onSubmit={handleRegisterTask}>
              <Textarea
                placeholder="Digite qual sua tarefa"
                value={input}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(e.target.value)
                }
              />
              <div className={styles.checkboxArea}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={publicTask}
                  onChange={handleChangePublic}
                />
                <label>Deixar tarefa publica?</label>
              </div>

              <button type="submit" className={styles.button}>
                Registrar
              </button>
            </form>
          </div>
        </section>
        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>

          {tasks.map((task) => (
            <article className={styles.task} key={task.id}>
              {task.public && (
                <div className={styles.tagContainer}>
                    <label className={styles.tag}>PUBLICO</label>
                    <button className={styles.shareButton} onClick={() => handleShare(task.id)}>
                        <FiShare2 size={22} color="#3183ff" />
                    </button>
                </div>
              )}
              <div className={styles.taskContent}>
                {task.public ? (
                    <Link href={`/task/${task.id}`}>
                        <p>{task.tarefa}</p>
                    </Link>
                ) : (
                    <p>{task.tarefa}</p>
                )}
                <button className={styles.trashButton} onClick={() => handleDeleteTask(task.id)}>
                  <FaTrash size={24} color="#ea3140" />
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: {
        email: session?.user?.email,
      },
    },
  };
};
