---
title: CModelState
---

```csharp
public interface CModelState : ISchemaClass<CModelState>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BodyGroupChoices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L26)

```csharp
ref CUtlVector<int> BodyGroupChoices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ClientClothCreationSuppressed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L22)

```csharp
ref bool ClientClothCreationSuppressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClothUpdateFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L32)

```csharp
ref byte ClothUpdateFlags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ForceLOD

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L30)

```csharp
ref byte ForceLOD { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### IdealMotionType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L28)

```csharp
ref byte IdealMotionType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MeshGroupMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L24)

```csharp
ref ulong MeshGroupMask { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Model

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### ModelName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L20)

```csharp
string ModelName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### BodyGroupChoicesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L37)

```csharp
void BodyGroupChoicesUpdated()
```

### ClientClothCreationSuppressedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L35)

```csharp
void ClientClothCreationSuppressedUpdated()
```

### IdealMotionTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L38)

```csharp
void IdealMotionTypeUpdated()
```

### MeshGroupMaskUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L36)

```csharp
void MeshGroupMaskUpdated()
```

### ModelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelState.cs#L34)

```csharp
void ModelUpdated()
```

