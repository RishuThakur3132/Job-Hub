export const getJobs = () => {
  return fetch("https://dummyjson.com/users?limit=10")
    .then((response) => response.json())
    .then((data) => {
      return data.users.map((user, index) => ({
        id: user.id,
        title: index % 2 === 0
          ? "Frontend Developer"
          : "Backend Developer",
        company: user.company?.name || "Tech Company",
        location: user.address?.city || "India",
        salary: "₹5 - ₹10 LPA",
        type: "Full Time",
        category: "IT",
        description:
          "We are looking for a talented professional to join our growing team.",
      }));
    });
};