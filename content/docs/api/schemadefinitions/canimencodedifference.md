---
title: CAnimEncodeDifference
---

# Interface CAnimEncodeDifference

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimEncodeDifference : ISchemaClass<CAnimEncodeDifference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimEncodeDifference>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L18)

```csharp
ref CUtlVector<CAnimBoneDifference> BoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimBoneDifference](/docs/api/schemadefinitions/canimbonedifference)>

### HasMorphBitArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L28)

```csharp
ref CUtlVector<byte> HasMorphBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### HasMovementBitArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L26)

```csharp
ref CUtlVector<byte> HasMovementBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### HasRotationBitArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L24)

```csharp
ref CUtlVector<byte> HasRotationBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### HasUserBitArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L30)

```csharp
ref CUtlVector<byte> HasUserBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### MorphArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L20)

```csharp
ref CUtlVector<CAnimMorphDifference> MorphArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimMorphDifference](/docs/api/schemadefinitions/canimmorphdifference)>

### UserArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L22)

```csharp
ref CUtlVector<CAnimUserDifference> UserArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimUserDifference](/docs/api/schemadefinitions/canimuserdifference)>

