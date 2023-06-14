export default function checkDuplicate(lists, title) {
  let check = true;
  lists.map((list) => {
    return list.title === title ? (check = false) : "";
  });

  return check;
}
