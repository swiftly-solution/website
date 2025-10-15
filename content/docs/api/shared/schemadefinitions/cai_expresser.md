---
title: CAI_Expresser
---

```csharp
public interface CAI_Expresser : ISchemaClass<CAI_Expresser>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowSpeakingInterrupts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L29)

```csharp
ref bool AllowSpeakingInterrupts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BlockedTalkTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L23)

```csharp
GameTime_t BlockedTalkTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### ConsiderSceneInvolvementAsSpeech

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L31)

```csharp
ref bool ConsiderSceneInvolvementAsSpeech { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastSpokenPriority

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L35)

```csharp
ref int LastSpokenPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastTimeAcceptedSpeak

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L27)

```csharp
GameTime_t LastTimeAcceptedSpeak { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Outer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L37)

```csharp
CBaseFlex? Outer { get; }
```

#### Property Value

- [CBaseFlex](/docs/api/shared/schemadefinitions/cbaseflex)?

### QueuedSpeechTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L21)

```csharp
GameTime_t QueuedSpeechTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### SceneEntityDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L33)

```csharp
ref bool SceneEntityDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StopTalkTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L17)

```csharp
GameTime_t StopTalkTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### StopTalkTimeWithoutDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L19)

```csharp
GameTime_t StopTalkTimeWithoutDelay { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### VoicePitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L25)

```csharp
ref int VoicePitch { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

