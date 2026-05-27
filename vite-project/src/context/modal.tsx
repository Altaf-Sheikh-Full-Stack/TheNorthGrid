import { create } from 'zustand'

interface ModalStore {
  open: boolean
  data: any

  openModal: (data: any) => void
  closeModal: () => void
}

const useModalStore = create<ModalStore>((set) => ({
  open: false,
  data: null,

  openModal: (data) =>
    set({
      open: true,
      data
    }),

  closeModal: () =>
    set({
      open: false,
      data: null
    })
}))

export default useModalStore