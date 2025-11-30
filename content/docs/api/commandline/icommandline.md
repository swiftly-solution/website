---
title: ICommandLine
---

# Interface ICommandLine

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L3)

**Namespace**: [SwiftlyS2.Shared.CommandLine](/docs/api/commandline)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ICommandLine
```

## Properties

### CommandLine

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L30)

```csharp
string CommandLine { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasParameters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L32)

```csharp
bool HasParameters { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParameterCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L13)

Gets the total number of parameters in the command line.

```csharp
int ParameterCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### GetParameterFloat(string, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L28)

Gets a float parameter from the command line.

```csharp
float GetParameterFloat(string paramName, float defaultValue = 0)
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetParameterInt(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L23)

Gets an integer parameter from the command line.

```csharp
int GetParameterInt(string paramName, int defaultValue = 0)
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetParameterString(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L18)

Gets a string parameter from the command line.

```csharp
string GetParameterString(string paramName, string defaultValue = "")
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasParameter(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L8)

Checks if a parameter exists in the command line.

```csharp
bool HasParameter(string paramName)
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

