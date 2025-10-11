---
title: CVoiceContainerLoopTrigger
---

```csharp
public interface CVoiceContainerLoopTrigger : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerLoopTrigger>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **CrossFade** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L24)

```csharp
ref bool CrossFade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FadeTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L22)

```csharp
ref float FadeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RetriggerTimeMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L20)

```csharp
ref float RetriggerTimeMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RetriggerTimeMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L18)

```csharp
ref float RetriggerTimeMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Sound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L16)

```csharp
CSoundContainerReference Sound { get; }
```

#### Property Value

- [CSoundContainerReference](/docs/api/shared/schemadefinitions/csoundcontainerreference)

