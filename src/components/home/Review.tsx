import Image from "next/image";

interface ReviewProps {
  user: {
    avatar: string;
    full_name: string;
    username: string;
  };
  text: string;
}

const Review = ({ user, text }: ReviewProps) => {
  return (
    <>
      <div className="w-full max-w-[421px] h-full p-5 rounded-[12px] border-border border-[1px] bg-[#FAFAFA08] space-y-2">
        <div className="flex gap-3 items-center">
          <Image
            src={user.avatar}
            width={48}
            height={48}
            alt="avatar"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h5 className="font-bold text-[18px]">{user.full_name}</h5>
            <h6 className="text-[#A1A1AA] tex-[16px] font-[500]">
              {user.username}
            </h6>
          </div>
        </div>
        <div>
          <p className="text-[#A1A1AA] text-[16px] font-[16px]">
            {text.split(/(\s+)/).map((word, idx) =>
              word.startsWith("@") ? (
                <span key={idx} className="text-[#A78BFA]">
                  {word}
                </span>
              ) : (
                word
              )
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
