---
title: CAttachment
---

```csharp
public interface CAttachment : ISchemaClass<CAttachment>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**IgnoreRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L30)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**InfluenceNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L18)

```csharp
ISchemaFixedArray<CUtlString> InfluenceNames { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

**InfluenceOffsets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L22)

```csharp
ISchemaFixedArray<Vector> InfluenceOffsets { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

**InfluenceRootTransform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L26)

```csharp
ISchemaFixedArray<bool> InfluenceRootTransform { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

**InfluenceRotations** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L20)

```csharp
ISchemaFixedArray<Quaternion> InfluenceRotations { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Quaternion](/docs/api/shared/natives/quaternion)>

**InfluenceWeights** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L24)

```csharp
ISchemaFixedArray<float> InfluenceWeights { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

**Influences** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L28)

```csharp
ref byte Influences { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttachment.cs#L16)

```csharp
ref CUtlString Name { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

