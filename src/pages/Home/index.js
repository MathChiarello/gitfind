import { useState } from "react";
import Header from "../../components/Header";
import backgroundImage from "../../assets/background.svg";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [userGit, setUserGit] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearchInfos = async () => {
    try {
      const responseUser = await fetch(`https://api.github.com/users/${user}`);
      const responseRepos = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      if (!responseUser.ok) {
        throw new Error("User not found");
      } else if (!responseRepos.ok) {
        throw new Error("Repositories not found");
      }

      const newUser = await responseUser.json();
      const newRepos = await responseRepos.json();

      const { name, login, avatar_url, bio } = newUser;

      setUserGit({
        name,
        login,
        avatar_url,
        bio,
      });

      setRepos(newRepos);

      if (bio === null) {
        setUserGit((prevState) => ({
          ...prevState,
          bio: "This user has no bio",
        }));
      }
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="home-container">
        <img
          className="background-image"
          src={backgroundImage}
          alt="background-app-image-git"
        />
        <div className="infos">
          <div className="infos-search">
            <input
              name="user"
              placeholder="@username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
            <button type="submit" onClick={handleSearchInfos}>
              Buscar
            </button>
          </div>
          {userGit ? (
            <>
              <div className="infos-profile">
                <img
                  src={
                    userGit
                      ? userGit.avatar_url
                      : "https://avatars.githubusercontent.com/u/583231?v=4"
                  }
                  alt={userGit ? userGit.name : "Default Avatar"}
                />
                <div className="infos-profile-text">
                  <div className="infos-profile-text-title">
                    <h2>{userGit.name}</h2>
                    <h4>@{userGit.login}</h4>
                  </div>
                  <p>{userGit && userGit.bio}</p>
                </div>
              </div>
              <hr />
              <div className="infos-repositories">
                <h3>Repositórios</h3>
                <div className="infos-repositories-list">
                  {repos.length > 0 ? (
                    repos.map((repo) => (
                      <ItemList
                        key={repo.id}
                        title={repo.name}
                        description={repo.description}
                        created_at={new Date(
                          repo.created_at
                        ).toLocaleDateString("pt-BR")}
                        url={repo.html_url}
                      />
                    ))
                  ) : (
                    <p>No repositories found for this user.</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <h3 className="message">Search a user...</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
