---
title: CSeqBoneMaskList
---

# Interface CSeqBoneMaskList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSeqBoneMaskList : ISchemaClass<CSeqBoneMaskList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSeqBoneMaskList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneWeightArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L22)

```csharp
ref CUtlVector<float> BoneWeightArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DefaultMorphCtrlWeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L24)

```csharp
ref float DefaultMorphCtrlWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalBoneArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L20)

```csharp
ref CUtlVector<short> LocalBoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### MorphCtrlWeightArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L26)

```csharp
ref CUtlVector<SchemaUntypedField> MorphCtrlWeightArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqBoneMaskList.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

