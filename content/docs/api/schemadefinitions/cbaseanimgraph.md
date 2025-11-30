---
title: CBaseAnimGraph
---

# Interface CBaseAnimGraph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseAnimGraph : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimGraphUpdateEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L22)

```csharp
ref bool AnimGraphUpdateEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AnimationUpdateScheduled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L28)

```csharp
ref bool AnimationUpdateScheduled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChoreoServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L20)

```csharp
IChoreoServices? ChoreoServices { get; }
```

#### Property Value

- [IChoreoServices](/docs/api/schemadefinitions/ichoreoservices)?

### Force

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L30)

```csharp
ref Vector Force { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ForceBone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L32)

```csharp
ref int ForceBone { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InitiallyPopulateInterpHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L18)

```csharp
ref bool InitiallyPopulateInterpHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastSlopeCheckPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L26)

```csharp
ref Vector LastSlopeCheckPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MaxSlopeDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L24)

```csharp
ref float MaxSlopeDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RagdollClientSide

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L38)

```csharp
ref bool RagdollClientSide { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RagdollEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L36)

```csharp
ref bool RagdollEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RagdollPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L34)

```csharp
PhysicsRagdollPose_t RagdollPose { get; }
```

#### Property Value

- [PhysicsRagdollPose_t](/docs/api/schemadefinitions/physicsragdollpose_t)

### XParentedRagdollRootInEntitySpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L40)

```csharp
ref CTransform XParentedRagdollRootInEntitySpace { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

## Methods

### AnimGraphUpdateEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L43)

```csharp
void AnimGraphUpdateEnabledUpdated()
```

### ForceBoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L45)

```csharp
void ForceBoneUpdated()
```

### ForceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L44)

```csharp
void ForceUpdated()
```

### InitiallyPopulateInterpHistoryUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L42)

```csharp
void InitiallyPopulateInterpHistoryUpdated()
```

### RagdollClientSideUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L48)

```csharp
void RagdollClientSideUpdated()
```

### RagdollEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L47)

```csharp
void RagdollEnabledUpdated()
```

### RagdollPoseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L46)

```csharp
void RagdollPoseUpdated()
```

