import './content.css'
import {Button, Card} from "react-bootstrap";
import Right from "./Right";
export default function Content(){
    return(
        <div className="details">
        <div className="left-view">
            <div className="titl">
               <header>Related Category</header>
            </div>
            <ul>
                <li>Paracetamol Tablets</li>
                <li>Paracetamol Syrup</li>
                <li>Paracetamol Powder</li>
                <li>Aceclofenac</li>
                <li>Magaladrate Simethicone Oral Suspension</li>
                <li>Mefenamic Paracetamol Syrup</li>
            </ul>
            <div className="titl">
                <header>Related Brands</header>
            </div>
            <ul>
                <li>Cipmol Paracetamol</li>
                <li>Pandal Paracetamol Syrup</li>
                <li>Combiflam</li>
                <li>Crocin Tablet</li>
                <li>Calpol Paracetamol Tablets</li>
                <li>Sumo Tablets</li>
            </ul>
            <div className="titl">
                <header>Buisness Type</header>
            </div>
            <ul>
                <li>Wholesaler</li>
                <li>Manufacturer</li>
                <li>Retailer</li>
                <li>Aceclofenac</li>
                <li>Exporter</li>
            </ul>
            <div className="titl">
                <header>Strength</header>
            </div>
            <ul>
                <li>500 mg</li>
                <li>600 mg</li>
            </ul>
            <div className="titl">
                <header>Manufacturer</header>
            </div>
            <ul>
                <li>Intas Pharmaceutical Ltd.</li>
                <li>Alkem Laboratories</li>
            </ul>
            <div className="titl">
                <header>Prescription/Non Prescription</header>
            </div>
            <ul>
                <li>Intas Pharmaceutical Ltd.</li>
                <li>Alkem Laboratories</li>
            </ul>
        </div>
            <div className="datas">
                <Right/>
            </div>
        </div>
    );
}