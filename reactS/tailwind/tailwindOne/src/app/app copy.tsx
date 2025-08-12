const Card=()=>{
  //emoji
  //temizleme
  //2 randevu
  return <div className="m-4 shadow p-4 flex flex-col gap-4 rounded">
    <span className="text-xl">Emoji</span>
    <span>Temizleme</span>
    <span className="text-gray-400">2 randevu</span></div>;
}

const app = () => {
  return (
    <Card/>
  )
}

export default app;