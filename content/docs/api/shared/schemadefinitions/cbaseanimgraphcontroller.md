---
title: CBaseAnimGraphController
---

```csharp
public interface CBaseAnimGraphController : CSkeletonAnimationController, ISkeletonAnimationController, ISchemaClass<ISkeletonAnimationController>, ISchemaClass<CSkeletonAnimationController>, ISchemaClass<CBaseAnimGraphController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActiveIKChainMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L22)

```csharp
ref uint ActiveIKChainMask { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AnimGraphNetworkedVars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L16)

```csharp
CAnimGraphNetworkedVariables AnimGraphNetworkedVars { get; }
```

#### Property Value

- [CAnimGraphNetworkedVariables](/docs/api/shared/schemadefinitions/canimgraphnetworkedvariables)

### AnimLoopMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L30)

```csharp
ref AnimLoopMode_t AnimLoopMode { get; }
```

#### Property Value

- [AnimLoopMode_t](/docs/api/shared/schemadefinitions/animloopmode_t)

### GraphCreationFlagsAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L54)

```csharp
ref byte GraphCreationFlagsAG2 { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### GraphDefinitionAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L44)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmGraphDefinition> GraphDefinitionAG2 { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCNmGraphDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypecnmgraphdefinition)>

### IsUsingAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L46)

```csharp
ref bool IsUsingAG2 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastUpdateSkipped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L40)

```csharp
ref bool LastUpdateSkipped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkedAnimationInputsChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L36)

```csharp
ref bool NetworkedAnimationInputsChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkedSequenceChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L38)

```csharp
ref bool NetworkedSequenceChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NotifyState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L34)

```csharp
ref SequenceFinishNotifyState_t NotifyState { get; }
```

#### Property Value

- [SequenceFinishNotifyState_t](/docs/api/shared/schemadefinitions/sequencefinishnotifystate_t)

### PlaybackRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L32)

```csharp
ref CNetworkedQuantizedFloat PlaybackRate { get; }
```

#### Property Value

- [CNetworkedQuantizedFloat](/docs/api/shared/natives/cnetworkedquantizedfloat)

### PrevAnimUpdateTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L42)

```csharp
GameTime_t PrevAnimUpdateTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### SeqFixedCycle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L28)

```csharp
ref float SeqFixedCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SeqStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L26)

```csharp
GameTime_t SeqStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L24)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### SequenceFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L18)

```csharp
ref bool SequenceFinished { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SerializePoseRecipeSizeAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L50)

```csharp
ref int SerializePoseRecipeSizeAG2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SerializePoseRecipeVersionAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L52)

```csharp
ref int SerializePoseRecipeVersionAG2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SerializedPoseRecipeAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L48)

```csharp
ref CUtlVector<byte> SerializedPoseRecipeAG2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### ServerGraphDefReloadCountAG2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L56)

```csharp
ref int ServerGraphDefReloadCountAG2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SoundSyncTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L20)

```csharp
ref float SoundSyncTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### AnimGraphNetworkedVarsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L58)

```csharp
void AnimGraphNetworkedVarsUpdated()
```

### AnimLoopModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L62)

```csharp
void AnimLoopModeUpdated()
```

### GraphCreationFlagsAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L69)

```csharp
void GraphCreationFlagsAG2Updated()
```

### GraphDefinitionAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L64)

```csharp
void GraphDefinitionAG2Updated()
```

### IsUsingAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L65)

```csharp
void IsUsingAG2Updated()
```

### PlaybackRateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L63)

```csharp
void PlaybackRateUpdated()
```

### SeqFixedCycleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L61)

```csharp
void SeqFixedCycleUpdated()
```

### SeqStartTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L60)

```csharp
void SeqStartTimeUpdated()
```

### SequenceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L59)

```csharp
void SequenceUpdated()
```

### SerializePoseRecipeSizeAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L67)

```csharp
void SerializePoseRecipeSizeAG2Updated()
```

### SerializePoseRecipeVersionAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L68)

```csharp
void SerializePoseRecipeVersionAG2Updated()
```

### SerializedPoseRecipeAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L66)

```csharp
void SerializedPoseRecipeAG2Updated()
```

### ServerGraphDefReloadCountAG2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L70)

```csharp
void ServerGraphDefReloadCountAG2Updated()
```

