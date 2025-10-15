---
title: CAnimSkeleton
---

```csharp
public interface CAnimSkeleton : ISchemaClass<CAnimSkeleton>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L21)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### Children

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L23)

```csharp
ref CUtlVector<CUtlVector<int>> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### Feet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L27)

```csharp
ref CUtlVector<CAnimFoot> Feet { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimFoot](/docs/api/shared/schemadefinitions/canimfoot)>

### LocalSpaceTransforms

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L17)

```csharp
ref CUtlVector<CTransform> LocalSpaceTransforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### LodBoneCounts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L31)

```csharp
ref CUtlVector<int> LodBoneCounts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ModelSpaceTransforms

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L19)

```csharp
ref CUtlVector<CTransform> ModelSpaceTransforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### MorphNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L29)

```csharp
ref CUtlVector<CUtlString> MorphNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### Parents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimSkeleton.cs#L25)

```csharp
ref CUtlVector<int> Parents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

