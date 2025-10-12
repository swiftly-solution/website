---
title: CEnvWindShared
---

```csharp
public interface CEnvWindShared : ISchemaClass<CEnvWindShared>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EntOwner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L48)

```csharp
ref CHandle<CBaseEntity> EntOwner { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **GustDirChange** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L36)

```csharp
ref ushort GustDirChange { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **GustDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L34)

```csharp
ref float GustDuration { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InitialWindDir** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L38)

```csharp
ref ushort InitialWindDir { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **InitialWindSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L40)

```csharp
ref float InitialWindSpeed { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Location** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L42)

```csharp
ref Vector Location { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MaxGust** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L28)

```csharp
ref ushort MaxGust { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **MaxGustDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L32)

```csharp
ref float MaxGustDelay { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxWind** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L22)

```csharp
ref ushort MaxWind { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **MinGust** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L26)

```csharp
ref ushort MinGust { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **MinGustDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L30)

```csharp
ref float MinGustDelay { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MinWind** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L20)

```csharp
ref ushort MinWind { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **OnGustEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L46)

```csharp
CEntityIOOutput OnGustEnd { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnGustStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L44)

```csharp
CEntityIOOutput OnGustStart { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L16)

```csharp
GameTime_t StartTime { get; }
```

- Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### **WindRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L24)

```csharp
ref int WindRadius { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **WindSeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L18)

```csharp
ref uint WindSeed { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### **GustDirChangeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L60)

```csharp
void GustDirChangeUpdated()
```

### **GustDurationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L59)

```csharp
void GustDurationUpdated()
```

### **InitialWindDirUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L61)

```csharp
void InitialWindDirUpdated()
```

### **InitialWindSpeedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L62)

```csharp
void InitialWindSpeedUpdated()
```

### **LocationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L63)

```csharp
void LocationUpdated()
```

### **MaxGustDelayUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L58)

```csharp
void MaxGustDelayUpdated()
```

### **MaxGustUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L56)

```csharp
void MaxGustUpdated()
```

### **MaxWindUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L53)

```csharp
void MaxWindUpdated()
```

### **MinGustDelayUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L57)

```csharp
void MinGustDelayUpdated()
```

### **MinGustUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L55)

```csharp
void MinGustUpdated()
```

### **MinWindUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L52)

```csharp
void MinWindUpdated()
```

### **StartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L50)

```csharp
void StartTimeUpdated()
```

### **WindRadiusUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L54)

```csharp
void WindRadiusUpdated()
```

### **WindSeedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindShared.cs#L51)

```csharp
void WindSeedUpdated()
```

