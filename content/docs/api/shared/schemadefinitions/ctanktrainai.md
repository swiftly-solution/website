---
title: CTankTrainAI
---

```csharp
public interface CTankTrainAI : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CTankTrainAI>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EngineSoundName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L26)

```csharp
string EngineSoundName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MovementSoundName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L28)

```csharp
string MovementSoundName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundPlaying

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L22)

```csharp
ref int SoundPlaying { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartSoundName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L24)

```csharp
string StartSoundName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TargetEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L20)

```csharp
ref CHandle<CBaseEntity> TargetEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### TargetEntityName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L30)

```csharp
string TargetEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Train

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTankTrainAI.cs#L18)

```csharp
ref CHandle<CFuncTrackTrain> Train { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CFuncTrackTrain](/docs/api/shared/schemadefinitions/cfunctracktrain)>

