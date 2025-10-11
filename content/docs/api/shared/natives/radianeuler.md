---
title: RadianEuler
---

```csharp
public struct RadianEuler
```

#### Inherited Members

## Constructors

### **RadianEuler(float, float, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L17)

```csharp
public RadianEuler(float x, float y, float z)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RadianEuler(RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L24)

```csharp
public RadianEuler(RadianEuler other)
```

#### Parameters

- **other**: [RadianEuler](/docs/api/shared/natives/radianeuler)

## Fields

### **X** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L13)

```csharp
public float X
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L14)

```csharp
public float Y
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Z** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L15)

```csharp
public float Z
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### **Zero** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L37)

```csharp
public static RadianEuler Zero { get; }
```

#### Property Value

- [RadianEuler](/docs/api/shared/natives/radianeuler)

## Methods

### **Equals(object?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L33)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### **GetHashCode()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L34)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### **ToQAngle()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L31)

```csharp
public QAngle ToQAngle()
```

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### **ToString()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L35)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### **operator +(RadianEuler, RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L40)

```csharp
public static RadianEuler operator +(RadianEuler a, RadianEuler b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### **operator /(RadianEuler, RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L50)

```csharp
public static RadianEuler operator /(RadianEuler a, RadianEuler b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### **operator /(RadianEuler, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L56)

```csharp
public static RadianEuler operator /(RadianEuler a, float b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### **operator ==(RadianEuler, RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L70)

```csharp
public static bool operator ==(RadianEuler a, RadianEuler b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator !=(RadianEuler, RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L73)

```csharp
public static bool operator !=(RadianEuler a, RadianEuler b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator *(RadianEuler, RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L47)

```csharp
public static RadianEuler operator *(RadianEuler a, RadianEuler b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### **operator *(RadianEuler, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L53)

```csharp
public static RadianEuler operator *(RadianEuler a, float b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### **operator -(RadianEuler, RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L44)

```csharp
public static RadianEuler operator -(RadianEuler a, RadianEuler b)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)
- **b**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### **operator -(RadianEuler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/RadianEuler.cs#L67)

```csharp
public static RadianEuler operator -(RadianEuler a)
```

#### Parameters

- **a**: [RadianEuler](/docs/api/shared/natives/radianeuler)

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

