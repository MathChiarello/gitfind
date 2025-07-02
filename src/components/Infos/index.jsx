import ItemList from "../ItemList";

const Infos = () => {
  return (
    <div className="infos">
      <div className="infos-search">
        <input
          name="user"
          placeholder="@username"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button type="submit" onClick={handleSearch}>
          Buscar
        </button>
      </div>
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
        <ItemList
          title="Hello World"
          description="This is a simple repository to demonstrate GitHub features."
        ></ItemList>
        <ItemList
          title="Hello World"
          description="This is a simple repository to demonstrate GitHub features."
        ></ItemList>
        <ItemList
          title="Hello World"
          description="This is a simple repository to demonstrate GitHub features."
        ></ItemList>
      </div>
    </div>
  );
};

export default Infos;
