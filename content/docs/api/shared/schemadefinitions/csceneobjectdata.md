---
title: CSceneObjectData
---

```csharp
public interface CSceneObjectData : ISchemaClass<CSceneObjectData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DrawBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L24)

```csharp
ref CUtlLeanVector<AABB_t, int> DrawBounds { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[AABB_t](/docs/api/shared/schemadefinitions/aabb_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### DrawCalls

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L22)

```csharp
ref CUtlLeanVector<CMaterialDrawDescriptor, int> DrawCalls { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CMaterialDrawDescriptor](/docs/api/shared/schemadefinitions/cmaterialdrawdescriptor), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MaxBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L20)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Meshlets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L26)

```csharp
ref CUtlLeanVector<CMeshletDescriptor, int> Meshlets { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CMeshletDescriptor](/docs/api/shared/schemadefinitions/cmeshletdescriptor), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MinBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L18)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TintColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L28)

```csharp
ref Vector4D TintColor { get; }
```

#### Property Value

- [Vector4D](/docs/api/shared/natives/vector4d)

