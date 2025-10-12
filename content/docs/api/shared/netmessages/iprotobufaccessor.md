---
title: IProtobufAccessor
---

```csharp
public interface IProtobufAccessor : INativeHandle
```

- Implements

## Methods

### **Add<T>(string, T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L94)

```csharp
void Add<T>(string fieldName, T value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: T

- Type Parameters

- **T**: 

### **AddBool(string, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L9)

```csharp
void AddBool(string fieldName, bool value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AddBytes(string, byte[])** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L57)

```csharp
void AddBytes(string fieldName, byte[] value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **AddColor(string, Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L75)

```csharp
void AddColor(string fieldName, Color value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Color](/docs/api/shared/natives/color)

### **AddDouble(string, double)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L45)

```csharp
void AddDouble(string fieldName, double value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [double](https://learn.microsoft.com/dotnet/api/system.double)

### **AddFloat(string, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L39)

```csharp
void AddFloat(string fieldName, float value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AddInt32(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L15)

```csharp
void AddInt32(string fieldName, int value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AddInt64(string, long)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L27)

```csharp
void AddInt64(string fieldName, long value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

### **AddNestedMessage(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L88)

```csharp
nint AddNestedMessage(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### **AddQAngle(string, QAngle)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L81)

```csharp
void AddQAngle(string fieldName, QAngle value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [QAngle](/docs/api/shared/natives/qangle)

### **AddString(string, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L51)

```csharp
void AddString(string fieldName, string value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### **AddUInt32(string, uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L21)

```csharp
void AddUInt32(string fieldName, uint value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **AddUInt64(string, ulong)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L33)

```csharp
void AddUInt64(string fieldName, ulong value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **AddVector(string, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L69)

```csharp
void AddVector(string fieldName, Vector value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector](/docs/api/shared/natives/vector)

### **AddVector2D(string, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L63)

```csharp
void AddVector2D(string fieldName, Vector2D value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector2D](/docs/api/shared/natives/vector2d)

### **ClearRepeatedField(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L91)

```csharp
void ClearRepeatedField(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Get<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L97)

```csharp
T Get<T>(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- T

- Type Parameters

- **T**: 

### **GetBool(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L12)

```csharp
bool GetBool(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GetBytes(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L60)

```csharp
byte[] GetBytes(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **GetColor(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L78)

```csharp
Color GetColor(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [Color](/docs/api/shared/natives/color)

### **GetDouble(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L48)

```csharp
double GetDouble(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### **GetFloat(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L42)

```csharp
float GetFloat(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GetInt32(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L18)

```csharp
int GetInt32(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GetInt64(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L30)

```csharp
long GetInt64(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### **GetNestedMessage(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L86)

```csharp
nint GetNestedMessage(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### **GetQAngle(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L84)

```csharp
QAngle GetQAngle(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [QAngle](/docs/api/shared/natives/qangle)

### **GetRepeated<T>(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L96)

```csharp
T GetRepeated<T>(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- T

- Type Parameters

- **T**: 

### **GetRepeatedBool(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L11)

```csharp
bool GetRepeatedBool(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GetRepeatedBytes(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L59)

```csharp
byte[] GetRepeatedBytes(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **GetRepeatedColor(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L77)

```csharp
Color GetRepeatedColor(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [Color](/docs/api/shared/natives/color)

### **GetRepeatedDouble(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L47)

```csharp
double GetRepeatedDouble(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### **GetRepeatedFieldSize(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L90)

```csharp
int GetRepeatedFieldSize(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GetRepeatedFloat(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L41)

```csharp
float GetRepeatedFloat(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GetRepeatedInt32(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L17)

```csharp
int GetRepeatedInt32(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GetRepeatedInt64(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L29)

```csharp
long GetRepeatedInt64(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### **GetRepeatedNestedMessage(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L87)

```csharp
nint GetRepeatedNestedMessage(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### **GetRepeatedQAngle(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L83)

```csharp
QAngle GetRepeatedQAngle(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [QAngle](/docs/api/shared/natives/qangle)

### **GetRepeatedString(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L53)

```csharp
string GetRepeatedString(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **GetRepeatedUInt32(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L23)

```csharp
uint GetRepeatedUInt32(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **GetRepeatedUInt64(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L35)

```csharp
ulong GetRepeatedUInt64(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **GetRepeatedVector(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L71)

```csharp
Vector GetRepeatedVector(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **GetRepeatedVector2D(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L65)

```csharp
Vector2D GetRepeatedVector2D(string fieldName, int index)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

- Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

### **GetString(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L54)

```csharp
string GetString(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **GetUInt32(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L24)

```csharp
uint GetUInt32(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **GetUInt64(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L36)

```csharp
ulong GetUInt64(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **GetVector(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L72)

```csharp
Vector GetVector(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [Vector](/docs/api/shared/natives/vector)

### **GetVector2D(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L66)

```csharp
Vector2D GetVector2D(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

### **HasField(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L7)

```csharp
bool HasField(string fieldName)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

- Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Set<T>(string, T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L93)

```csharp
void Set<T>(string fieldName, T value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: T

- Type Parameters

- **T**: 

### **SetBool(string, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L8)

```csharp
void SetBool(string fieldName, bool value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SetBytes(string, byte[])** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L56)

```csharp
void SetBytes(string fieldName, byte[] value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **SetColor(string, Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L74)

```csharp
void SetColor(string fieldName, Color value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Color](/docs/api/shared/natives/color)

### **SetDouble(string, double)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L44)

```csharp
void SetDouble(string fieldName, double value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [double](https://learn.microsoft.com/dotnet/api/system.double)

### **SetFloat(string, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L38)

```csharp
void SetFloat(string fieldName, float value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SetInt32(string, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L14)

```csharp
void SetInt32(string fieldName, int value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SetInt64(string, long)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L26)

```csharp
void SetInt64(string fieldName, long value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

### **SetQAngle(string, QAngle)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L80)

```csharp
void SetQAngle(string fieldName, QAngle value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [QAngle](/docs/api/shared/natives/qangle)

### **SetRepeated<T>(string, int, T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L95)

```csharp
void SetRepeated<T>(string fieldName, int index, T value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: T

- Type Parameters

- **T**: 

### **SetRepeatedBool(string, int, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L10)

```csharp
void SetRepeatedBool(string fieldName, int index, bool value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SetRepeatedBytes(string, int, byte[])** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L58)

```csharp
void SetRepeatedBytes(string fieldName, int index, byte[] value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **SetRepeatedColor(string, int, Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L76)

```csharp
void SetRepeatedColor(string fieldName, int index, Color value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [Color](/docs/api/shared/natives/color)

### **SetRepeatedDouble(string, int, double)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L46)

```csharp
void SetRepeatedDouble(string fieldName, int index, double value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [double](https://learn.microsoft.com/dotnet/api/system.double)

### **SetRepeatedFloat(string, int, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L40)

```csharp
void SetRepeatedFloat(string fieldName, int index, float value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SetRepeatedInt32(string, int, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L16)

```csharp
void SetRepeatedInt32(string fieldName, int index, int value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SetRepeatedInt64(string, int, long)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L28)

```csharp
void SetRepeatedInt64(string fieldName, int index, long value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

### **SetRepeatedQAngle(string, int, QAngle)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L82)

```csharp
void SetRepeatedQAngle(string fieldName, int index, QAngle value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [QAngle](/docs/api/shared/natives/qangle)

### **SetRepeatedString(string, int, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L52)

```csharp
void SetRepeatedString(string fieldName, int index, string value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SetRepeatedUInt32(string, int, uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L22)

```csharp
void SetRepeatedUInt32(string fieldName, int index, uint value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SetRepeatedUInt64(string, int, ulong)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L34)

```csharp
void SetRepeatedUInt64(string fieldName, int index, ulong value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **SetRepeatedVector(string, int, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L70)

```csharp
void SetRepeatedVector(string fieldName, int index, Vector value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [Vector](/docs/api/shared/natives/vector)

### **SetRepeatedVector2D(string, int, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L64)

```csharp
void SetRepeatedVector2D(string fieldName, int index, Vector2D value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: [Vector2D](/docs/api/shared/natives/vector2d)

### **SetString(string, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L50)

```csharp
void SetString(string fieldName, string value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SetUInt32(string, uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L20)

```csharp
void SetUInt32(string fieldName, uint value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SetUInt64(string, ulong)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L32)

```csharp
void SetUInt64(string fieldName, ulong value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **SetVector(string, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L68)

```csharp
void SetVector(string fieldName, Vector value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector](/docs/api/shared/natives/vector)

### **SetVector2D(string, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufAccessor.cs#L62)

```csharp
void SetVector2D(string fieldName, Vector2D value)
```

- Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector2D](/docs/api/shared/natives/vector2d)

