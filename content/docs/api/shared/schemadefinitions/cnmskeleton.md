---
title: CNmSkeleton
---

```csharp
public interface CNmSkeleton : ISchemaClass<CNmSkeleton>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L19)

```csharp
ref CUtlLeanVector<CGlobalSymbol, int> BoneIDs { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L17)

```csharp
ref CGlobalSymbol ID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### IsPropSkeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L33)

```csharp
ref bool IsPropSkeleton { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaskDefinitions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L29)

```csharp
ref CUtlLeanVector<NmBoneMaskSetDefinition_t, int> MaskDefinitions { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[NmBoneMaskSetDefinition_t](/docs/api/shared/schemadefinitions/nmbonemasksetdefinition_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ModelSpaceReferencePose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L25)

```csharp
ref CUtlVector<CTransform> ModelSpaceReferencePose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### NumBonesToSampleAtLowLOD

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L27)

```csharp
ref int NumBonesToSampleAtLowLOD { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ParentIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L21)

```csharp
ref CUtlVector<int> ParentIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ParentSpaceReferencePose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L23)

```csharp
ref CUtlVector<CTransform> ParentSpaceReferencePose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### SecondarySkeletons

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L31)

```csharp
ref CUtlLeanVector<CNmSkeleton__SecondarySkeleton_t, int> SecondarySkeletons { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CNmSkeleton__SecondarySkeleton_t](/docs/api/shared/schemadefinitions/cnmskeleton__secondaryskeleton_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

