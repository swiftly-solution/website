---
title: CSkeletonInstance
---

# Interface CSkeletonInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSkeletonInstance : CGameSceneNode, ISchemaClass<CGameSceneNode>, ISchemaClass<CSkeletonInstance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CGameSceneNode](/docs/api/schemadefinitions/cgamescenenode)
- [ISchemaClass<CGameSceneNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSkeletonInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DirtyMotionType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L27)

```csharp
SchemaUntypedField DirtyMotionType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DisableSolidCollisionsForHierarchy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L24)

```csharp
ref bool DisableSolidCollisionsForHierarchy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitboxSet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L34)

```csharp
ref byte HitboxSet { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### IsAnimationEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L20)

```csharp
ref bool IsAnimationEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsGeneratingLatchedParentSpaceState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L30)

```csharp
SchemaUntypedField IsGeneratingLatchedParentSpaceState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MaterialGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L32)

```csharp
ref CUtlStringToken MaterialGroup { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### ModelState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L18)

```csharp
CModelState ModelState { get; }
```

#### Property Value

- [CModelState](/docs/api/schemadefinitions/cmodelstate)

### UseParentRenderBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L22)

```csharp
ref bool UseParentRenderBounds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### HitboxSetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L40)

```csharp
void HitboxSetUpdated()
```

### IsAnimationEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L37)

```csharp
void IsAnimationEnabledUpdated()
```

### MaterialGroupUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L39)

```csharp
void MaterialGroupUpdated()
```

### ModelStateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L36)

```csharp
void ModelStateUpdated()
```

### UseParentRenderBoundsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkeletonInstance.cs#L38)

```csharp
void UseParentRenderBoundsUpdated()
```

