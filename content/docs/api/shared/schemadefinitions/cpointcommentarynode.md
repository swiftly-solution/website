---
title: CPointCommentaryNode
---

```csharp
public interface CPointCommentaryNode : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CPointCommentaryNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AbortedPlaybackAt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L54)

```csharp
GameTime_t AbortedPlaybackAt { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **Active** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L60)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CommentaryFile** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L20)

```csharp
string CommentaryFile { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L50)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FinishAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L46)

```csharp
ref QAngle FinishAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **FinishOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L42)

```csharp
ref Vector FinishOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **FinishedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L40)

```csharp
GameTime_t FinishedTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **ListenedTo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L74)

```csharp
ref bool ListenedTo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NodeNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L70)

```csharp
ref int NodeNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NodeNumberMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L72)

```csharp
ref int NodeNumberMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OnCommentaryStarted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L56)

```csharp
CEntityIOOutput OnCommentaryStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnCommentaryStopped** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L58)

```csharp
CEntityIOOutput OnCommentaryStopped { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OriginalAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L44)

```csharp
ref QAngle OriginalAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **PostCommands** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L18)

```csharp
string PostCommands { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **PreCommands** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L16)

```csharp
string PreCommands { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **PreventChangesWhileMoving** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L48)

```csharp
ref bool PreventChangesWhileMoving { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PreventMovement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L34)

```csharp
ref bool PreventMovement { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Speakers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L68)

```csharp
string Speakers { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L62)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **StartTimeInCommentary** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L64)

```csharp
ref float StartTimeInCommentary { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TeleportOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L52)

```csharp
ref Vector TeleportOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Title** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L66)

```csharp
string Title { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **UnderCrosshair** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L36)

```csharp
ref bool UnderCrosshair { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Unstoppable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L38)

```csharp
ref bool Unstoppable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ViewPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L28)

```csharp
string ViewPosition { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ViewPosition2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L30)

```csharp
ref CHandle<CBaseEntity> ViewPosition2 { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **ViewPositionMover** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L32)

```csharp
ref CHandle<CBaseEntity> ViewPositionMover { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **ViewTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L22)

```csharp
string ViewTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ViewTarget1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L24)

```csharp
ref CHandle<CBaseEntity> ViewTarget1 { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **ViewTargetAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L26)

```csharp
ref CHandle<CBaseEntity> ViewTargetAngles { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

## Methods

### **ActiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L78)

```csharp
void ActiveUpdated()
```

### **CommentaryFileUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L76)

```csharp
void CommentaryFileUpdated()
```

### **ListenedToUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L85)

```csharp
void ListenedToUpdated()
```

### **NodeNumberMaxUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L84)

```csharp
void NodeNumberMaxUpdated()
```

### **NodeNumberUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L83)

```csharp
void NodeNumberUpdated()
```

### **SpeakersUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L82)

```csharp
void SpeakersUpdated()
```

### **StartTimeInCommentaryUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L80)

```csharp
void StartTimeInCommentaryUpdated()
```

### **StartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L79)

```csharp
void StartTimeUpdated()
```

### **TitleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L81)

```csharp
void TitleUpdated()
```

### **ViewPosition2Updated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCommentaryNode.cs#L77)

```csharp
void ViewPosition2Updated()
```

