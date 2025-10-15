---
title: CBaseAnimGraph
---

```csharp
public interface CBaseAnimGraph : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimGraphUpdateEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L21)

```csharp
ref bool AnimGraphUpdateEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AnimationUpdateScheduled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L27)

```csharp
ref bool AnimationUpdateScheduled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChoreoServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L19)

```csharp
IChoreoServices? ChoreoServices { get; }
```

#### Property Value

- [IChoreoServices](/docs/api/shared/schemadefinitions/ichoreoservices)?

### Force

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L29)

```csharp
ref Vector Force { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ForceBone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L31)

```csharp
ref int ForceBone { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InitiallyPopulateInterpHistory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L17)

```csharp
ref bool InitiallyPopulateInterpHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastSlopeCheckPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L25)

```csharp
ref Vector LastSlopeCheckPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MaxSlopeDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L23)

```csharp
ref float MaxSlopeDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RagdollClientSide

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L37)

```csharp
ref bool RagdollClientSide { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RagdollEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L35)

```csharp
ref bool RagdollEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RagdollPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L33)

```csharp
PhysicsRagdollPose_t RagdollPose { get; }
```

#### Property Value

- [PhysicsRagdollPose_t](/docs/api/shared/schemadefinitions/physicsragdollpose_t)

### XParentedRagdollRootInEntitySpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L39)

```csharp
ref CTransform XParentedRagdollRootInEntitySpace { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

## Methods

### AnimGraphUpdateEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L42)

```csharp
void AnimGraphUpdateEnabledUpdated()
```

### ForceBoneUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L44)

```csharp
void ForceBoneUpdated()
```

### ForceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L43)

```csharp
void ForceUpdated()
```

### InitiallyPopulateInterpHistoryUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L41)

```csharp
void InitiallyPopulateInterpHistoryUpdated()
```

### RagdollClientSideUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L47)

```csharp
void RagdollClientSideUpdated()
```

### RagdollEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L46)

```csharp
void RagdollEnabledUpdated()
```

### RagdollPoseUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraph.cs#L45)

```csharp
void RagdollPoseUpdated()
```

