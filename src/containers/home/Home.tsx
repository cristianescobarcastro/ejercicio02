import { useState } from "react"
import Card from "../../components/card/Card"
import Form from "../../components/form/Form"
import Title from "../../components/title/Title"

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Title>Landing Page Ejercicio Clase 02</Title>
                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Card
                        name="Cristián Escobar Castro"
                        description="Ejemplo de prueba"
                    />
                </div>
            </div>          
            <div className="row">
                <div className="col-4 offset-4">
                    <Form />
                </div>
            </div>          
        </div>
    )
}

export default Home