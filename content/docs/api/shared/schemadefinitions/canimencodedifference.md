---
title: CAnimEncodeDifference
---

```csharp
public interface CAnimEncodeDifference : ISchemaClass<CAnimEncodeDifference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L17)

```csharp
ref CUtlVector<CAnimBoneDifference> BoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimBoneDifference](/docs/api/shared/schemadefinitions/canimbonedifference)>

### HasMorphBitArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L27)

```csharp
ref CUtlVector<byte> HasMorphBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### HasMovementBitArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L25)

```csharp
ref CUtlVector<byte> HasMovementBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### HasRotationBitArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L23)

```csharp
ref CUtlVector<byte> HasRotationBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### HasUserBitArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L29)

```csharp
ref CUtlVector<byte> HasUserBitArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### MorphArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L19)

```csharp
ref CUtlVector<CAnimMorphDifference> MorphArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimMorphDifference](/docs/api/shared/schemadefinitions/canimmorphdifference)>

### UserArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodeDifference.cs#L21)

```csharp
ref CUtlVector<CAnimUserDifference> UserArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimUserDifference](/docs/api/shared/schemadefinitions/canimuserdifference)>

