import './modal.css'
import Section from '../section/section'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useModalStore from '../../context/modal'
import Text from '../text/text'

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modal = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20
    },

    visible: {
        opacity: 1,
        scale: 1,
        y: 0
    }
}

const Modal = () => {

    const {
        open,
        data,
        closeModal
    } = useModalStore()

    useEffect(() => {

        document.body.style.overflow =
            open ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }

    }, [open])

    return createPortal(

        <AnimatePresence>

            {open && (

                <motion.div
                    className="ModalOverlay"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={closeModal}
                >

                    <motion.div
                        className="ModalContent"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        <Section backgroundColor="White">
                            <Text>{data.text}</Text>
                        </Section>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>,

        document.body
    )
}

export default Modal