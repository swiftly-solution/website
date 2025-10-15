---
title: CSkeletonInstance
---

```csharp
public interface CSkeletonInstance : CGameSceneNode, ISchemaClass<CGameSceneNode>, ISchemaClass<CSkeletonInstance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DirtyMotionType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L26)

```csharp
SchemaUntypedField DirtyMotionType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DisableSolidCollisionsForHierarchy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L23)

```csharp
ref bool DisableSolidCollisionsForHierarchy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitboxSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L33)

```csharp
ref byte HitboxSet { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### IsAnimationEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L19)

```csharp
ref bool IsAnimationEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsGeneratingLatchedParentSpaceState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L29)

```csharp
SchemaUntypedField IsGeneratingLatchedParentSpaceState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### MaterialGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L31)

```csharp
ref CUtlStringToken MaterialGroup { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### ModelState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L17)

```csharp
CModelState ModelState { get; }
```

#### Property Value

- [CModelState](/docs/api/shared/schemadefinitions/cmodelstate)

### UseParentRenderBounds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L21)

```csharp
ref bool UseParentRenderBounds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### HitboxSetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L39)

```csharp
void HitboxSetUpdated()
```

### IsAnimationEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L36)

```csharp
void IsAnimationEnabledUpdated()
```

### MaterialGroupUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L38)

```csharp
void MaterialGroupUpdated()
```

### ModelStateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L35)

```csharp
void ModelStateUpdated()
```

### UseParentRenderBoundsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L37)

```csharp
void UseParentRenderBoundsUpdated()
```

