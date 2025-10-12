---
title: CNmSkeleton
---

```csharp
public interface CNmSkeleton : ISchemaClass<CNmSkeleton>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L19)

```csharp
SchemaUntypedField BoneIDs { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L16)

```csharp
ref CGlobalSymbol ID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### IsPropSkeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L35)

```csharp
ref bool IsPropSkeleton { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaskDefinitions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L30)

```csharp
SchemaUntypedField MaskDefinitions { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ModelSpaceReferencePose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L25)

```csharp
ref CUtlVector<CTransform> ModelSpaceReferencePose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### NumBonesToSampleAtLowLOD

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L27)

```csharp
ref int NumBonesToSampleAtLowLOD { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ParentIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L21)

```csharp
ref CUtlVector<int> ParentIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ParentSpaceReferencePose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L23)

```csharp
ref CUtlVector<CTransform> ParentSpaceReferencePose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### SecondarySkeletons

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L33)

```csharp
SchemaUntypedField SecondarySkeletons { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

