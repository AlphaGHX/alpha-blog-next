type Props = {
  children: React.ReactNode
  className: string
  onDrop: (files: FileList) => void
  onEnter?: () => void
  onLeave?: () => void
}

const FileDropper = ({
  children,
  className,
  onDrop,
  onEnter,
  onLeave,
}: Props) => {
  return (
    <div className={className}>
      {children}
      <label
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        htmlFor="file-input"
        onMouseEnter={() => {
          onEnter && onEnter()
        }}
        onMouseLeave={() => {
          onLeave && onLeave()
        }}
        onDrop={(e) => {
          e.preventDefault()
          onDrop(e.dataTransfer.files)
        }}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onDragEnter={(e) => {
          e.preventDefault()
          onEnter && onEnter()
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          onLeave && onLeave()
        }}
      ></label>
      <input
        id="file-input"
        className="hidden"
        type="file"
        onChange={(e) => {
          if (e.target.files?.length !== 0) onDrop(e.target.files as FileList)
        }}
      ></input>
    </div>
  )
}

export default FileDropper
