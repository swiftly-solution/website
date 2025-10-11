---
title: Helper
---

```csharp
public static class Helper
```

#### Inheritance

#### Inherited Members

## Methods

### **AsSchema<T>(nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Helper.cs#L53)

```csharp
public static T AsSchema<T>(nint ptr) where T : ISchemaClass<T>
```

#### Parameters

- **ptr**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The pointer to the schema class.

#### Returns

- T - The schema class.

#### Type Parameters

- **T**:  - The schema class to convert to.

### **Colored(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Helper.cs#L39)

```csharp
public static string Colored(this string text)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to replace the color codes in.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The text with the color codes replaced.

