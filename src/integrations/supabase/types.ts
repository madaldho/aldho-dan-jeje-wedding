export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      jobs: {
        Row: {
          application_url: string | null
          brand_color: string | null
          company_logo_url: string | null
          company_name: string
          created_at: string
          description: string
          experience_level: string | null
          id: string
          is_active: boolean | null
          is_priority: boolean | null
          job_type: string | null
          location: string
          salary_max: number | null
          salary_min: number | null
          tags: string[] | null
          title: string
          user_id: string | null
        }
        Insert: {
          application_url?: string | null
          brand_color?: string | null
          company_logo_url?: string | null
          company_name: string
          created_at?: string
          description: string
          experience_level?: string | null
          id?: string
          is_active?: boolean | null
          is_priority?: boolean | null
          job_type?: string | null
          location: string
          salary_max?: number | null
          salary_min?: number | null
          tags?: string[] | null
          title: string
          user_id?: string | null
        }
        Update: {
          application_url?: string | null
          brand_color?: string | null
          company_logo_url?: string | null
          company_name?: string
          created_at?: string
          description?: string
          experience_level?: string | null
          id?: string
          is_active?: boolean | null
          is_priority?: boolean | null
          job_type?: string | null
          location?: string
          salary_max?: number | null
          salary_min?: number | null
          tags?: string[] | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          adventure_theme: string
          ai_personality: string
          created_at: string | null
          current_streak: number | null
          id: string
          level: number | null
          longest_streak: number | null
          total_xp: number | null
          updated_at: string | null
          user_id: string | null
          username: string
        }
        Insert: {
          adventure_theme: string
          ai_personality: string
          created_at?: string | null
          current_streak?: number | null
          id?: string
          level?: number | null
          longest_streak?: number | null
          total_xp?: number | null
          updated_at?: string | null
          user_id?: string | null
          username: string
        }
        Update: {
          adventure_theme?: string
          ai_personality?: string
          created_at?: string | null
          current_streak?: number | null
          id?: string
          level?: number | null
          longest_streak?: number | null
          total_xp?: number | null
          updated_at?: string | null
          user_id?: string | null
          username?: string
        }
        Relationships: []
      }
      rsvp_responses: {
        Row: {
          attendance: string
          created_at: string
          guest_count: number | null
          id: string
          message: string | null
          name: string
        }
        Insert: {
          attendance: string
          created_at?: string
          guest_count?: number | null
          id?: string
          message?: string | null
          name: string
        }
        Update: {
          attendance?: string
          created_at?: string
          guest_count?: number | null
          id?: string
          message?: string | null
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
