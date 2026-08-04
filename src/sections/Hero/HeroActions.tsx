import Button from "@/components/ui/Button/Button";

export default function HeroActions() {
    return (
        <div className="mt-10 flex flex-wrap gap-4">
            <Button
                href="#projects"
                variant="primary"
            >
                View Projects
            </Button>

            <Button
                href="/resume.pdf"
                variant="secondary"
            >
                Download Resume
            </Button>
        </div>
    );
}