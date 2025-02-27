import { useEffect, useState } from "react";
// import './fetchFox.css';
import './homework.module.css'
import MyButton from "../../components/myButton/MyButton";
import Loader from "../../components/loader/Loader";

interface IFoxData {
  image: string;
  link: string;
}

export default function Homework08() {
  const [imgFox, setImgFox] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFox = async (): Promise<void> => {
    // ! включаем loader
    setIsLoading(true);
    const res = await fetch('https://randomfox.ca/floof/');
    const data: IFoxData = await res.json();
    setImgFox(data.image);
    // ! выключаем loader
    setIsLoading(false);
  };

  useEffect(() => {
    getFox();
  }, []);


  // const printClick = () => console.log('click')

  // printClick()

  return (
    <div>
      <h4>Homework 08</h4>
      {isLoading ? <Loader /> : (
        <>
          <h2>Fetch fox 🦊</h2>
          <div className="fox-wrapper">
            <img src={imgFox} alt="" />
          </div>
          <MyButton func={getFox} text="one more fox please" />

        </>
      )}

    </div>
  );
}


