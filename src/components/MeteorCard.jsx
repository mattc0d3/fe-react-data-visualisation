const MeteorCard = ({ meteor }) => {
    
    const { name, year, mass, distance } = meteor
    const age = getAge(year)
    const formattedMass = formatMass(mass)
    return <li className="meteor-card">
        <h3>{name} - {Math.round(distance)} miles away</h3>
        <p>{age} years old</p>
        <p>{formattedMass}</p>
    </li>
}

function getAge(year) {
    const yearNum = Number(year.split("-")[0])
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - yearNum
}

function formatMass(mass) {
    return Number(mass) > 1000 ? `${(Number(mass) / 1000).toFixed(1)} kg` : `${Number(mass)} g`
}

export default MeteorCard