function User ({isLoggedIn, name, surname, age, friends}) {
    return (
    
    <>
    <h1>
    {isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapınız'}
    </h1>;

    {
        friends.map((friend)=> <div>{friend}</div>)
    }
    
    </>
    );
    
}

export default User;