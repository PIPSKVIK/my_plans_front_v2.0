declare module '*.vue' {
    import { defineComponent } from 'vue';
    import 'vite/client';
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}
