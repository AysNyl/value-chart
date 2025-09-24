const UpdateData = async () => {
    const data = await fetch("/requests", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        // body: JSON.stringify({params});
    });
    // const text = data.text();
    // await writeFile("./_data/check.csv", await text);
    return 0
};

export default UpdateData;