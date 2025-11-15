---
title: NativeBenchmark
---

```csharp
public static class NativeBenchmark
```

#### Inheritance

#### Inherited Members

## Methods

### BoolToBool(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L87)

```csharp
public static bool BoolToBool(bool value)
```

#### Parameters

- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ComplexWithString(nint, Vector, string, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L229)

```csharp
public static void ComplexWithString(nint entity, Vector pos, string name, QAngle angle)
```

#### Parameters

- **entity**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **pos**: [Vector](/docs/api/shared/natives/vector)
- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **angle**: [QAngle](/docs/api/shared/natives/qangle)

### DoubleToDouble(double)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L135)

```csharp
public static double DoubleToDouble(double value)
```

#### Parameters

- **value**: [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### FloatToFloat(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L127)

```csharp
public static float FloatToFloat(float value)
```

#### Parameters

- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetBool()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L23)

```csharp
public static bool GetBool()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetDouble()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L71)

```csharp
public static double GetDouble()
```

#### Returns

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetFloat()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L63)

```csharp
public static float GetFloat()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetInt32()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L31)

```csharp
public static int GetInt32()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetInt64()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L47)

```csharp
public static long GetInt64()
```

#### Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetPtr()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L79)

```csharp
public static nint GetPtr()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetUInt32()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L39)

```csharp
public static uint GetUInt32()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetUInt64()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L55)

```csharp
public static ulong GetUInt64()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Int32ToInt32(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L95)

```csharp
public static int Int32ToInt32(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Int64ToInt64(long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L111)

```csharp
public static long Int64ToInt64(long value)
```

#### Parameters

- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### MultiPrimitives(nint, int, float, bool, ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L180)

```csharp
public static int MultiPrimitives(nint p1, int i1, float f1, bool b1, ulong u1)
```

#### Parameters

- **p1**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **i1**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **f1**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **b1**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **u1**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MultiWithOneString(nint, string, nint, int, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L188)

```csharp
public static int MultiWithOneString(nint p1, string s1, nint p2, int i1, float f1)
```

#### Parameters

- **p1**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **s1**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **p2**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **i1**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **f1**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MultiWithTwoStrings(nint, string, nint, string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L200)

```csharp
public static void MultiWithTwoStrings(nint p1, string s1, nint p2, string s2, int i1)
```

#### Parameters

- **p1**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **s1**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **p2**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **s2**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **i1**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PtrToPtr(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L143)

```csharp
public static nint PtrToPtr(nint value)
```

#### Parameters

- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### QAngleToQAngle(nint, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L222)

```csharp
public static void QAngleToQAngle(nint result, QAngle value)
```

#### Parameters

- **result**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **value**: [QAngle](/docs/api/shared/natives/qangle)

### StringToPtr(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L168)

```csharp
public static nint StringToPtr(string value)
```

#### Parameters

- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### StringToString(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L151)

```csharp
public static string StringToString(string value)
```

#### Parameters

- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UInt32ToUInt32(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L103)

```csharp
public static uint UInt32ToUInt32(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### UInt64ToUInt64(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L119)

```csharp
public static ulong UInt64ToUInt64(ulong value)
```

#### Parameters

- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### VectorToVector(nint, Vector)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L215)

```csharp
public static void VectorToVector(nint result, Vector value)
```

#### Parameters

- **result**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **value**: [Vector](/docs/api/shared/natives/vector)

### VoidToVoid()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Natives/Benchmark.cs#L16)

```csharp
public static void VoidToVoid()
```

