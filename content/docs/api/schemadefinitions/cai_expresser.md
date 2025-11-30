---
title: CAI_Expresser
---

# Interface CAI_Expresser

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAI_Expresser : ISchemaClass<CAI_Expresser>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAI_Expresser>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AllowSpeakingInterrupts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L30)

```csharp
ref bool AllowSpeakingInterrupts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BlockedTalkTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L24)

```csharp
GameTime_t BlockedTalkTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ConsiderSceneInvolvementAsSpeech

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L32)

```csharp
ref bool ConsiderSceneInvolvementAsSpeech { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastSpokenPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L36)

```csharp
ref int LastSpokenPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastTimeAcceptedSpeak

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L28)

```csharp
GameTime_t LastTimeAcceptedSpeak { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### Outer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L38)

```csharp
CBaseFlex? Outer { get; }
```

#### Property Value

- [CBaseFlex](/docs/api/schemadefinitions/cbaseflex)?

### QueuedSpeechTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L22)

```csharp
GameTime_t QueuedSpeechTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### SceneEntityDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L34)

```csharp
ref bool SceneEntityDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StopTalkTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L18)

```csharp
GameTime_t StopTalkTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### StopTalkTimeWithoutDelay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L20)

```csharp
GameTime_t StopTalkTimeWithoutDelay { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### VoicePitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAI_Expresser.cs#L26)

```csharp
ref int VoicePitch { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

