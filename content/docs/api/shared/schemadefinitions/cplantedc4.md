---
title: CPlantedC4
---

```csharp
public interface CPlantedC4 : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CPlantedC4>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AttributeManager** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L24)

```csharp
CAttributeContainer AttributeManager { get; }
```

#### Property Value

- [CAttributeContainer](/docs/api/shared/schemadefinitions/cattributecontainer)

### **BeingDefused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L44)

```csharp
ref bool BeingDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **BombDefused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L52)

```csharp
ref bool BombDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **BombDefuser** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L54)

```csharp
ref CHandle<CCSPlayerPawn> BombDefuser { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### **BombSite** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L20)

```csharp
ref int BombSite { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **BombTicking** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L16)

```csharp
ref bool BombTicking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **C4Blow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L18)

```csharp
GameTime_t C4Blow { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **CannotBeDefused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L32)

```csharp
ref bool CannotBeDefused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CatchUpToPlayerEye** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L64)

```csharp
ref QAngle CatchUpToPlayerEye { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **DefuseCountDown** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L50)

```csharp
GameTime_t DefuseCountDown { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **DefuseLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L48)

```csharp
ref float DefuseLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EntitySpottedState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L34)

```csharp
EntitySpottedState_t EntitySpottedState { get; }
```

#### Property Value

- [EntitySpottedState_t](/docs/api/shared/schemadefinitions/entityspottedstate_t)

### **HasExploded** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L40)

```csharp
ref bool HasExploded { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LastDefuseTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L46)

```csharp
GameTime_t LastDefuseTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **LastSpinDetectionTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L66)

```csharp
GameTime_t LastSpinDetectionTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **NextBotBeepTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L62)

```csharp
GameTime_t NextBotBeepTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **OnBombBeginDefuse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L28)

```csharp
CEntityIOOutput OnBombBeginDefuse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnBombDefuseAborted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L30)

```csharp
CEntityIOOutput OnBombDefuseAborted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnBombDefused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L26)

```csharp
CEntityIOOutput OnBombDefused { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **ProgressBarTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L56)

```csharp
ref int ProgressBarTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SourceSoundscapeHash** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L22)

```csharp
ref int SourceSoundscapeHash { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SpotRules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L36)

```csharp
ref int SpotRules { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TimerLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L42)

```csharp
ref float TimerLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TrainingPlacedByPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L38)

```csharp
ref bool TrainingPlacedByPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **VoiceAlertFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L58)

```csharp
ref bool VoiceAlertFired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **VoiceAlertPlayed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L60)

```csharp
ISchemaFixedArray<bool> VoiceAlertPlayed { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

## Methods

### **AttributeManagerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L72)

```csharp
void AttributeManagerUpdated()
```

### **BeingDefusedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L77)

```csharp
void BeingDefusedUpdated()
```

### **BombDefusedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L80)

```csharp
void BombDefusedUpdated()
```

### **BombDefuserUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L81)

```csharp
void BombDefuserUpdated()
```

### **BombSiteUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L70)

```csharp
void BombSiteUpdated()
```

### **BombTickingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L68)

```csharp
void BombTickingUpdated()
```

### **C4BlowUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L69)

```csharp
void C4BlowUpdated()
```

### **CannotBeDefusedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L73)

```csharp
void CannotBeDefusedUpdated()
```

### **DefuseCountDownUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L79)

```csharp
void DefuseCountDownUpdated()
```

### **DefuseLengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L78)

```csharp
void DefuseLengthUpdated()
```

### **EntitySpottedStateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L74)

```csharp
void EntitySpottedStateUpdated()
```

### **HasExplodedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L75)

```csharp
void HasExplodedUpdated()
```

### **SourceSoundscapeHashUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L71)

```csharp
void SourceSoundscapeHashUpdated()
```

### **TimerLengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlantedC4.cs#L76)

```csharp
void TimerLengthUpdated()
```

