---
title: CAnimAttachment
---

```csharp
public interface CAnimAttachment : ISchemaClass<CAnimAttachment>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**InfluenceIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimAttachment.cs#L20)

```csharp
ISchemaFixedArray<int> InfluenceIndices { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**InfluenceOffsets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimAttachment.cs#L18)

```csharp
ISchemaFixedArray<Vector> InfluenceOffsets { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

**InfluenceRotations** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimAttachment.cs#L16)

```csharp
ISchemaFixedArray<Quaternion> InfluenceRotations { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Quaternion](/docs/api/shared/natives/quaternion)>

**InfluenceWeights** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimAttachment.cs#L22)

```csharp
ISchemaFixedArray<float> InfluenceWeights { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

**NumInfluences** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimAttachment.cs#L24)

```csharp
ref byte NumInfluences { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

