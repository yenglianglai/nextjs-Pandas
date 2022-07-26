import square from "./square";

export default function grid() {
  return (
    <div className="grid grid-cols-4 mx-12 my-8 gap-x-8">
      <div>hi</div>
      <square id="01">hello</square>
      <square></square>
      <square></square>
    </div>
  );
}
