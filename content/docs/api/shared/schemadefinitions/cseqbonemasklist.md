---
title: CSeqBoneMaskList
---

```csharp
public interface CSeqBoneMaskList : ISchemaClass<CSeqBoneMaskList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneWeightArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L20)

```csharp
ref CUtlVector<float> BoneWeightArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DefaultMorphCtrlWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L22)

```csharp
ref float DefaultMorphCtrlWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalBoneArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L18)

```csharp
ref CUtlVector<short> LocalBoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### MorphCtrlWeightArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L25)

```csharp
ref CUtlVector MorphCtrlWeightArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L16)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

