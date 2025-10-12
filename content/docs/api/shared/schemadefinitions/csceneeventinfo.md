---
title: CSceneEventInfo
---

```csharp
public interface CSceneEventInfo : ISchemaClass<CSceneEventInfo>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ClientSide** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L38)

```csharp
ref bool ClientSide { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HasArrived** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L24)

```csharp
ref bool HasArrived { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsGesture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L30)

```csharp
ref bool IsGesture { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Layer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L16)

```csharp
ref int Layer { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Next** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L28)

```csharp
GameTime_t Next { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **Priority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L18)

```csharp
ref int Priority { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SceneEventId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L36)

```csharp
SceneEventId_t SceneEventId { get; }
```

- Property Value

- [SceneEventId_t](/docs/api/shared/schemadefinitions/sceneeventid_t)

### **Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L20)

```csharp
HSequence Sequence { get; }
```

- Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### **ShouldRemove** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L32)

```csharp
ref bool ShouldRemove { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Started** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L40)

```csharp
ref bool Started { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Target** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L34)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L26)

```csharp
ref int Type { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Weight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L22)

```csharp
ref float Weight { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

