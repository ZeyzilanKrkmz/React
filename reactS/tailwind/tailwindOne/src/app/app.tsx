

/*const MyButton = ({metin}:{metin:string}) => {
  return (
    <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-900">{metin}</button>
  );
};


const app = () => {
  return (
    <div>
    <MyButton metin={"satın al"}/>
    </div>
  )
}

export default app;*/

/*type Props={
  metin:string,
}


const MyButton = (props: Props) => {
  return (
    <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-900">{props.metin}</button>
  );
};


const app = () => {
  return (
    <div>
    <MyButton metin={"satın al"}/>
    </div>
  )
}

export default app;*/



/*type Props={
  metin:string;
  renk:"green" |"blue"|"red"|"purple";
  boyut?:"küçük"|"orta"|"büyük";
};


const MyButton = (props: Props) => {
  return (
    <button className={`bg-${props.renk}blue-500 text-white p-${props.boyut=="küçük"?"p-2":"p-4"} rounded hover:bg-${props.renk}blue-900`}
    >{props.metin}
    </button>
  );
};


const app = () => {
  return (
    <div>
    <MyButton metin={"satın al"} renk={"red"} boyut={"küçük"}/>
     <MyButton metin={"satın al"} renk={"green"} boyut={"küçük"}/>
      <MyButton metin={"satın al"} renk={"blue"} boyut={"küçük"}/>
       <MyButton metin={"satın al"} renk={"purple"} boyut={"küçük"}/>
    </div>
  );
};

export default app;*/

/*type Props={
  emoji:string;
  baslik:string;
  aciklama:string;
}

const Card=(props:Props)=>{
  //emoji
  //temizleme
  //2 randevu
  return <div className="m-4 bg-white shadow p-4 flex flex-col gap-4 rounded">
    <span className="text-xl">{props.emoji}</span>
    <span>{props.baslik}</span>
    <span className="text-gray-400">{props.aciklama}</span></div>;
}

const app = () => {
  return (
    <div className="bg-slate-100 h-screen"><Card emoji="☕" baslik="americano" aciklama="orta boy"/>
        <Card emoji="🧋" baslik="bubble tea" aciklama="orta boy"/>
        <Card emoji="🍵" baslik="ahududu çayı" aciklama="orta boy"/>
</div>
  )
}

export default app;*/

