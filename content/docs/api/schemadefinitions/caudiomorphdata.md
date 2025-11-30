---
title: CAudioMorphData
---

# Interface CAudioMorphData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAudioMorphData : ISchemaClass<CAudioMorphData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAudioMorphData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EaseIn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L26)

```csharp
ref float EaseIn { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EaseOut

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L28)

```csharp
ref float EaseOut { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NameHashCodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L20)

```csharp
ref CUtlVector<uint> NameHashCodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### NameStrings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L22)

```csharp
ref CUtlVector<CUtlString> NameStrings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### Samples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L24)

```csharp
ref CUtlVector<CUtlVector<float>> Samples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>>

### Times

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioMorphData.cs#L18)

```csharp
ref CUtlVector<float> Times { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

