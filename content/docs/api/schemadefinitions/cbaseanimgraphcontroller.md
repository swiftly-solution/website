---
title: CBaseAnimGraphController
---

# Interface CBaseAnimGraphController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseAnimGraphController : CSkeletonAnimationController, ISkeletonAnimationController, ISchemaClass<ISkeletonAnimationController>, ISchemaClass<CSkeletonAnimationController>, ISchemaClass<CBaseAnimGraphController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSkeletonAnimationController](/docs/api/schemadefinitions/cskeletonanimationcontroller)
- [ISkeletonAnimationController](/docs/api/schemadefinitions/iskeletonanimationcontroller)
- [ISchemaClass<ISkeletonAnimationController>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSkeletonAnimationController>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraphController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveIKChainMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L24)

```csharp
ref uint ActiveIKChainMask { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AnimGraphNetworkedVars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L18)

```csharp
CAnimGraphNetworkedVariables AnimGraphNetworkedVars { get; }
```

#### Property Value

- [CAnimGraphNetworkedVariables](/docs/api/schemadefinitions/canimgraphnetworkedvariables)

### AnimLoopMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L32)

```csharp
ref AnimLoopMode_t AnimLoopMode { get; }
```

#### Property Value

- [AnimLoopMode_t](/docs/api/schemadefinitions/animloopmode_t)

### GraphCreationFlagsAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L56)

```csharp
ref byte GraphCreationFlagsAG2 { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### GraphDefinitionAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L46)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmGraphDefinition> GraphDefinitionAG2 { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCNmGraphDefinition](/docs/api/schemadefinitions/infoforresourcetypecnmgraphdefinition)>

### IsUsingAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L48)

```csharp
ref bool IsUsingAG2 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastUpdateSkipped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L42)

```csharp
ref bool LastUpdateSkipped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkedAnimationInputsChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L38)

```csharp
ref bool NetworkedAnimationInputsChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkedSequenceChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L40)

```csharp
ref bool NetworkedSequenceChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NotifyState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L36)

```csharp
ref SequenceFinishNotifyState_t NotifyState { get; }
```

#### Property Value

- [SequenceFinishNotifyState_t](/docs/api/schemadefinitions/sequencefinishnotifystate_t)

### PlaybackRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L34)

```csharp
ref CNetworkedQuantizedFloat PlaybackRate { get; }
```

#### Property Value

- [CNetworkedQuantizedFloat](/docs/api/natives/cnetworkedquantizedfloat)

### PrevAnimUpdateTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L44)

```csharp
GameTime_t PrevAnimUpdateTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### SeqFixedCycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L30)

```csharp
ref float SeqFixedCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SeqStartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L28)

```csharp
GameTime_t SeqStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L26)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

### SequenceFinished

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L20)

```csharp
ref bool SequenceFinished { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SerializePoseRecipeSizeAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L52)

```csharp
ref int SerializePoseRecipeSizeAG2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SerializePoseRecipeVersionAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L54)

```csharp
ref int SerializePoseRecipeVersionAG2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SerializedPoseRecipeAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L50)

```csharp
ref CUtlVector<byte> SerializedPoseRecipeAG2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### ServerGraphDefReloadCountAG2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L58)

```csharp
ref int ServerGraphDefReloadCountAG2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ServerSerializationContextIteration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L60)

```csharp
ref int ServerSerializationContextIteration { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SoundSyncTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L22)

```csharp
ref float SoundSyncTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### AnimGraphNetworkedVarsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L62)

```csharp
void AnimGraphNetworkedVarsUpdated()
```

### AnimLoopModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L66)

```csharp
void AnimLoopModeUpdated()
```

### GraphCreationFlagsAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L73)

```csharp
void GraphCreationFlagsAG2Updated()
```

### GraphDefinitionAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L68)

```csharp
void GraphDefinitionAG2Updated()
```

### IsUsingAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L69)

```csharp
void IsUsingAG2Updated()
```

### PlaybackRateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L67)

```csharp
void PlaybackRateUpdated()
```

### SeqFixedCycleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L65)

```csharp
void SeqFixedCycleUpdated()
```

### SeqStartTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L64)

```csharp
void SeqStartTimeUpdated()
```

### SequenceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L63)

```csharp
void SequenceUpdated()
```

### SerializePoseRecipeSizeAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L71)

```csharp
void SerializePoseRecipeSizeAG2Updated()
```

### SerializePoseRecipeVersionAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L72)

```csharp
void SerializePoseRecipeVersionAG2Updated()
```

### SerializedPoseRecipeAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L70)

```csharp
void SerializedPoseRecipeAG2Updated()
```

### ServerGraphDefReloadCountAG2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L74)

```csharp
void ServerGraphDefReloadCountAG2Updated()
```

### ServerSerializationContextIterationUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseAnimGraphController.cs#L75)

```csharp
void ServerSerializationContextIterationUpdated()
```

