---
title: CAudioMorphData
---

```csharp
public interface CAudioMorphData : ISchemaClass<CAudioMorphData>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EaseIn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L24)

```csharp
ref float EaseIn { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EaseOut** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L26)

```csharp
ref float EaseOut { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NameHashCodes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L18)

```csharp
ref CUtlVector<uint> NameHashCodes { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **NameStrings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L20)

```csharp
ref CUtlVector<CUtlString> NameStrings { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **Samples** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L22)

```csharp
ref CUtlVector<CUtlVector<float>> Samples { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>>

### **Times** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L16)

```csharp
ref CUtlVector<float> Times { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

